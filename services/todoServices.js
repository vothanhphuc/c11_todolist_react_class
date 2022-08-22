import axiosClient from "./axiosClient"


const url = 'todo'

const todoServices = {
    getTodos : () => axiosClient.get(url),
    deleteTodos : id => axiosClient.delete(`${url}/${id}`),
    updateTodos : (id, data) => axiosClient.put(`${url}/${id}`, data)
}

export default todoServices 