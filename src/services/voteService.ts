import { API } from "./apiClient";
import { Vote } from "../models/Vote";

export const voteService = {

  async getVote(userID: number, memeID: number): Promise<Vote | null> {
    const apiClient = API.createClient();
    const url = `/votes/?user=${userID}&meme=${memeID}`;
    const response = await apiClient.get(url);
    // It is expected that combination of User and Meme in a Vote is unique,
    // meaning that a return list (results) can contain only 0 or 1 item:
    return response.data.results[0] || null;
  },

  async createVote(memeID: number, score: number): Promise<Vote> {
    const apiClient = API.createClient();
    const response = await apiClient.post("/votes/", { meme: memeID, score: score });
    return response.data;
  },

  async updateVote(voteID: number, score: number): Promise<Vote> {
    const apiClient = API.createClient();
    const response = await apiClient.patch(`/votes/${voteID}/`, { score: score });
    return response.data;
  },

};
