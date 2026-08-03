import {
    useState,
    useEffect,
} from "react";

import { askResume } from "../services/ragApi";

export default function useRag() {

    const [messages, setMessages] = useState(() => {

        const saved = localStorage.getItem(
            "rag_chat"
        );

        return saved
            ? JSON.parse(saved)
            : [];

    });

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    useEffect(() => {

        localStorage.setItem(

            "rag_chat",

            JSON.stringify(messages)

        );

    }, [messages]);

    async function ask(question) {

        const candidateId = Number(

            localStorage.getItem("candidate_id")

        );

        if (!candidateId) {

            setError(
                "Please upload a resume first."
            );

            return;

        }

        try {

            setLoading(true);

            setError("");

            // User Message

            setMessages((prev) => [

                ...prev,

                {

                    sender: "user",

                    text: question,

                },

                {

                    sender: "ai",

                    text: "Thinking...",

                    loading: true,

                },

            ]);

            console.log(
                "Candidate ID:",
                candidateId
            );

            console.log(
                "Question:",
                question
            );

            const response = await askResume(

                candidateId,

                question

            );

            let answer = response.answer;

            // Backend kabhi JSON string bhejta hai

            try {

                answer = JSON.parse(answer);

            }

            catch {

                // Plain text response

            }

            setMessages((prev) => {

                const updated = [...prev];

                // Remove Thinking...

                updated.pop();

                updated.push({

                    sender: "ai",

                    text: answer,

                });

                return updated;

            });

        }

        catch (err) {

            setMessages((prev) => {

                const updated = [...prev];

                if (

                    updated.length &&

                    updated[updated.length - 1].loading

                ) {

                    updated.pop();

                }

                return updated;

            });

            setError(

                err.response?.data?.detail ||

                "Unable to get answer."

            );

        }

        finally {

            setLoading(false);

        }

    }

    function clearChat() {

        localStorage.removeItem(
            "rag_chat"
        );

        setMessages([]);

    }

    return {

        ask,

        clearChat,

        messages,

        loading,

        error,

    };

}