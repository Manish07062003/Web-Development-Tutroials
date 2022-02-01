const fs=require('fs');
fs.mkdir('Dogs', { recursive: true }, (err) => {
    if (err) throw err;
  });
  console.log("I come after mkdir")