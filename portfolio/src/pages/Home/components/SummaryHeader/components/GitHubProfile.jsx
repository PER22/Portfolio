import React, { useEffect, useState } from 'react';

const GitHubProfile = () => {
  const [bio, setBio] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const splitLines = str => str.split(/\r?\n/);
  useEffect(() => {
    const getBio = async () => {
      const response = await fetch("https://api.github.com/users/PER22");
      const githubUserObject = await response.json();
      const bio_lines = splitLines(githubUserObject["bio"]);
      setBio(bio_lines);
      setLoaded(true);
    };
    getBio();
  }, []);
  if (!loaded) { return <></> }
  return (
    <div>
      {bio.map( (b,i) =>
       <p key={i} className='bio-line'>{b}</p> 
      )}
    </div>
  );
};

export default GitHubProfile;