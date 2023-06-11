'use client';
import Image from 'next/image'
import styles from './page.module.css'
import {useSelector  , useDispatch} from 'react-redux'
import { getProfileInformation } from '@/RTK/slices/ProfileSlice';
import { useEffect } from 'react';
export default function Home() {
   const info = useSelector (state => state.profile);
   const dispatch = useDispatch ();
   useEffect(()=>{
    dispatch(getProfileInformation());
   },[])
  return (
    <></>
  )
}
