import React, { useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import Registeration from '../../src/components/registration'
import Centered from '../../src/layouts/centered'
import { Alert } from '../../src/components/alerts/'
import Router from 'next/router'


const Index = () => {
  const { registerMessage, registerError, isAuthenticated } = useSelector(
    state => ({
        registerSuccess: state.register.registerSuccess,
        registerMessage: state.register.registerMessage,
        registerError: state.register.registerError,
        isAuthenticated: state.auth.isAuthenticated,
        registerErrorsArray: state.register.registerErrorsArray
    }),
    shallowEqual
)

useEffect(() =>{
  if(isAuthenticated){
  Router.push('/books')
  }
  }, [isAuthenticated])

  return (
    <Centered hieght={'h-screen'}>
       {registerError ? <Alert color={'red'} outlined={true} rounded>{registerMessage}</Alert> : ''}
       <Registeration/>
    </Centered>
  
  )
}

export default Index