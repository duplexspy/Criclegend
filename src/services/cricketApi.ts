export interface Match {
  id: string;
  title: string;
  format: string;
  status: string;
  teamA: { name: string; score: string; overs: string; logo?: string };
  teamB: { name: string; score: string; overs: string; logo?: string };
  result?: string;
  venue?: string;
}

export interface PlayerStats {
  id: string;
  name: string;
  role: string;
  image?: string;
  batting: {
    format: string;
    matches: number;
    innings: number;
    runs: number;
    average: number;
    strikeRate: number;
    hundreds: number;
    fifties: number;
  }[];
  bowling: {
    format: string;
    matches: number;
    wickets: number;
    economy: number;
    average: number;
  }[];
}

const API_KEY = import.meta.env.VITE_CRICKET_API_KEY;
const BASE_URL = "https://example-cricket-api.p.rapidapi.com"; // Replace with your chosen API's URL

/**
 * Helper to make authenticated requests to your Cricket API
 */
async function fetchCricketData(endpoint: string) {
  if (!API_KEY) {
    console.warn("VITE_CRICKET_API_KEY is missing. Returning mock data.");
    return null;
  }

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      headers: {
        // These headers will depend on the specific API provider you choose
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "example-cricket-api.p.rapidapi.com",
      },
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching cricket data:", error);
    return null;
  }
}

/**
 * Fetch a list of live and recent matches
 */
export async function getLiveMatches(): Promise<Match[] | null> {
  const data = await fetchCricketData("/matches/live");
  
  if (!data) return null; // Fallback to mock data in the component

  // Map the API's specific data structure to our app's `Match` interface
  // return data.matches.map(m => ({ ... }))
  return data;
}

/**
 * Fetch career statistics for a specific player
 */
export async function getPlayerProfile(playerName: string): Promise<PlayerStats | null> {
  // First you might need to search for the player ID, then fetch their stats
  const data = await fetchCricketData(`/players/search?name=${encodeURIComponent(playerName)}`);
  
  if (!data) return null; // Fallback to mock data in the component

  // Process and map career stats...
  return data;
}
