import request from '@/utils/request';

export async function query() {
  return request('/api/users');
}

// export async function query() {
//   return request('/user/getInfo');
// }

// export async function queryCurrent() {
//   return request('/api/currentUser');
// }
export async function queryCurrent() {
  return request('/user/getInfo',{
    method:'POST'
  });
}
