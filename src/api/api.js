/** @format */

import * as axios from 'axios';

// создаем базовую настройку axios для дальнейшего использования
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https:social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'd9a00567-85f9-455a-9fcc-50958aef86ec',
    },
});

export const usersAPI = {
    getUsers(pageNumber = 1, pageSize = 10) {
        return (
            instance
            .get(`users?page=${pageNumber}&count=${pageSize}`)
            // из всех данных по цепочке промисов выделили только data:
            .then((response) => response.data)
        );
    },
    followUser(userId) {
        return instance
            .post(`follow/${userId}`)
            .then((response) => response.data);
    },
    unFollowUser(userId) {
        return instance
            .delete(`follow/${userId}`)
            .then((response) => response.data);
    },
    getAuth() {
        return instance.get(`auth/me`).then((response) => response.data);
    },

    getProfile(id) {
        return instance.get(`profile/${id}`);
    },
};