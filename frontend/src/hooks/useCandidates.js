import { useEffect, useState } from "react";

import { getCandidates } from "../services/candidateService";

export default function useCandidates() {

    const [candidates, setCandidates] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getCandidates()

            .then((data) => {

                setCandidates(data);

            })

            .finally(() => {

                setLoading(false);

            });

    }, []);

    return {

        candidates,

        loading,

    };

}