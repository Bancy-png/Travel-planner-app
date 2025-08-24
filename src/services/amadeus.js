// src/services/amadeus.js
import axios from 'axios';

const AMADEUS_BASE = 'https://test.api.amadeus.com';
const CLIENT_ID = import.meta.env.VITE_AMADEUS_CLIENT_ID;
const CLIENT_SECRET = import.meta.env.VITE_AMADEUS_CLIENT_SECRET;

let accessToken = null;
let tokenExpiry = 0;

async function fetchToken() {
  const now = Date.now();
  if (accessToken && now < tokenExpiry - 60000) return accessToken; // cached

  const params = new URLSearchParams();
  params.append('grant_type', 'client_credentials');
  params.append('client_id', CLIENT_ID);
  params.append('client_secret', CLIENT_SECRET);

  const res = await axios.post(`${AMADEUS_BASE}/v1/security/oauth2/token`, params, {
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
  });
  accessToken = res.data.access_token;
  tokenExpiry = now + (res.data.expires_in * 1000);
  return accessToken;
}

export async function amadeusGet(path, params = {}) {
  const token = await fetchToken();
  const res = await axios.get(`${AMADEUS_BASE}${path}`, {
    params,
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}

// example usage: search cities
export const searchCities = (keyword) => 
  amadeusGet('/v1/reference-data/locations', { keyword, subType: 'CITY' });
