import React from 'react'
import {useState, useEffect, createContext } from 'react'
import firebase from '../services/firebaseConnection'
import {toast} from 'react-toastify'

export const AuthContext = createContext({})

function AuthProvider({children}) {
    const [user,setUser] = useState(null)
    const [loadingAuth, setLoadingAuth] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
        const storageUser = localStorage.getItem('SistemaUser')
    
        if(storageUser){
            setUser(JSON.parse(storageUser))
            setLoading(false)
        }
        setLoading(false)
       }, [])
    async function signIn(email, password) {
        setLoadingAuth(true)

        await firebase.auth().signInWithEmailAndPassword(email, password)
        .then(async(value) =>{
            let uid = value.user.uid
            const userProfile = await firebase.firestore().collection('users')
            .doc(uid)
            .get()

            let data = {
                uid: uid,
                nome: userProfile.data().nome,
                avatarUrl: userProfile.data().avatarUrl,
                email: value.user.email
            }

            setUser(data)
            storageUser(data)
            setLoadingAuth(false)
            toast.success(`Bem vindo de volta, ${data.nome}`)
        })

        .catch((error) => {
            console.log(error)
            setLoadingAuth(false)
            toast.error('Ops, algo deu errado')
        })
    }

    async function signUp(email, password, nome){
        setLoadingAuth(true)
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(async(value) =>{
          let uid= value.user.uid

          await firebase.firestore().collection('users')
          .doc(uid).set({
              nome:nome,
              avatarUrl: null,
          })
          .then(() =>{
              let data = {
                  uid: uid,
                  nome:nome,
                  email: value.user.email,
                  avatarUrl: null
              }
              setUser(data)
              storageUser(data)
              setLoadingAuth(false)
              toast.success(`Bem vindo, ${nome}`)
          })
        })
        .catch((error) =>{
            console.log(error)
            setLoadingAuth(false)
            toast.error('Ops, algo deu errado')
        })
    }
    function storageUser(data){
        localStorage.setItem('SistemaUser', JSON.stringify(data))
       } 
    return (
        <AuthContext.Provider value= {{
            signed: !!user,
            user,
            loading,
            loadingAuth,
            signUp,
            signIn
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
