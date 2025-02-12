const promise = new Promise((resolve, reject) => {
  // Generate random number between 0 and 9
  const randomInt = Math.floor(Math.random() * 10);

  if (randomInt % 2 === 0) {
    // Success
    setTimeout(() => resolve("done"), 2000);
  } else {
    // Failure
    setTimeout(() => reject("error"), 2000);
  }
});

// Your solution(s) to exercise001 here!
const doPromise = async () => {
  try {
    const resolve = await promise;
    console.log(`Yay! Promise resolved with response: ${resolve}`);
  } catch (reject) {
    console.log(`Boo. Promise rejected with response: ${reject}`);
  }
};

doPromise();

/*
promise
  .then((resolve) =>
    console.log(`Yay! Promise resolved with response: ${resolve}`)
  )
  .catch((reject) =>
    console.log(`Boo. Promise rejected with response: ${reject}`)
  );
*/
