import http from "./httpService";

export async function changeProposalStatusApi({ proposalId, ...rest }) {
  // {status, projectId}
  return http.patch(`/proposal/${proposalId}`, rest);
}

export async function getProposalsApi() {
  return http.get(`/proposal/list`);
}

export async function createProposalApi(data) {
  return http.post(`/proposal/add`, data);
}
