const sentence = "hello there from lighthouse labs";

let counter = 0;

for (const char of sentence) {

  setTimeout(() => {
    process.stdout.write(char);
  }, 1000 + counter)

  counter += 50;

}

setTimeout(() => {
  process.stdout.write('\n');
}, 1000 + counter)