import React, {useEffect, useState} from 'react'
import {todolistApi} from "../api/todolist-api";

export default {
    title: 'API'
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.getTodos()
            .then(res => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.createTodo('React')
            .then(res => {
                setState(res.data.data.item)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '5cd4e9ad-db05-4e91-90fe-fae169f6e23c'
    useEffect(() => {
        todolistApi.deleteTodo(todolistId)
            .then(res => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {

    const [state, setState] = useState<any>(null)
    const todolistId = 'bf1f80f5-52d1-470b-884f-516b532879fc'

    useEffect(() => {
        todolistApi.updateTodoTitle(todolistId,'qwerty')
            .then(res => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const GetTask = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = 'cba3e307-6fe2-42ce-99c3-784b8c9bcc53'

    useEffect(() => {
        todolistApi.getTask(todolistId)
            .then(res => {
                setState(res.data.items[0].title)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const PostTask = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = 'bf1f80f5-52d1-470b-884f-516b532879fc'

    useEffect(() => {
        todolistApi.postTask(todolistId,"ura")
            .then(res => {
                setState(res.data.data.item.title)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const UpdateTaskTitle = () => {

    const [state, setState] = useState<any>(null)
    const todolistId = 'bf1f80f5-52d1-470b-884f-516b532879fc'
    const taskId = '8914c70d-4c49-4758-8bee-89dafc6fabd0'
    useEffect(() => {
        todolistApi.updateTaskTitle(todolistId, taskId, 'qwerty')
            .then(res => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const DeleteTaskTitle = () => {

    const [state, setState] = useState<any>(null)
    const todolistId = 'bf1f80f5-52d1-470b-884f-516b532879fc'
    const taskId = '8914c70d-4c49-4758-8bee-89dafc6fabd0'
    useEffect(() => {
        todolistApi.deleteTask(todolistId, taskId)
            .then(res => {
                setState(res.data)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}