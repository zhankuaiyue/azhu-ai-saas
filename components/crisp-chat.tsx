"use client";

import { useEffect } from "react";
import {
    Crisp
} from "crisp-sdk-web";

export const CrispChat = () => {
    useEffect(()=>{
        Crisp.configure("48651be2-2f4d-42ae-a1a8-9ee2811caa6a");
    },[]);

    return null;
}

