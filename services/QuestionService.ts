"use server";
import { QuestionInterface } from "@/types/QuestionInterface";

export async function QuestionService(): Promise<QuestionInterface[]> {
    const url = "https://script.google.com/macros/s/AKfycbw4_MjFEAGHuBKXPbyzOiVOKlkWx6vFig26fYUP_m0tehJ1D_Cd6XwAoyedYlpe-poETA/exec";
    const res = await fetch(url, {
        method: "GET",
        mode: "cors",
    });

    if (!res.ok) {
        throw new Error("Failed to fetch questions");
    }

    return res.json() as Promise<QuestionInterface[]>;
}