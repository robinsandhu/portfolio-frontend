import React, { useEffect, useState } from 'react';

const GithubGistComponent = ({ gistId }) => {
    const [gist, setGist] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchGist = async () => {
            try {
                const response = await fetch(`https://api.github.com/gists/${gistId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch the Gist');
                }
                const data = await response.json();
                setGist(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchGist();
    }, [gistId]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!gist) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h3>{gist.description}</h3>
            {Object.keys(gist.files).map((file) => (
                <div key={file}>
                    <h4>{file}</h4>
                    <pre>{gist.files[file].content}</pre>
                </div>
            ))}
        </div>
    );
};

export default GithubGistComponent;
