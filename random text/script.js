const paragraphs = [
  `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores natus adipisci, expedita laboriosam aliquam doloremque fuga reprehenderit tenetur magni, autem non et ad unde fugit! Enim adipisci nisi eum ratione.`,
  `Maxime saepe, architecto dolores vero maiores nam. Voluptates minima et commodi consequatur, distinctio quia? Quas nostrum temporibus voluptatibus, culpa praesentium similique distinctio! Magnam architecto maiores eos sunt alias exercitationem hic.`,
  `At voluptatibus, ipsum numquam ut ratione aspernatur dicta amet, voluptas odit, fugiat molestiae? Unde, autem qui pariatur reiciendis veritatis laudantium odit adipisci numquam cum vel nostrum voluptatem porro enim provident!
    Culpa cumque accusantium odit voluptatem? Quia expedita vel fuga iste iure at delectus hic molestias sed non. Facilis nobis, sed reiciendis asperiores repellat, tempora similique mollitia eum aut corrupti at.`,
  ` Maxime aliquid veritatis vel rem obcaecati porro dolore? Rerum, magni, excepturi beatae praesentium facilis officiis placeat dolores enim totam accusamus quis minus aut suscipit harum autem minima provident aliquid temporibus?`,
  `Eius modi sequi aspernatur velit aliquid distinctio natus explicabo itaque minima! Voluptatibus est quod earum, deserunt rem nulla culpa unde. Corporis autem est praesentium! Facilis pariatur beatae voluptas nisi adipisci?`,
  `Nulla mollitia tempora dignissimos magnam perferendis. Iste doloribus minus explicabo iusto neque porro, eius perferendis! Sint ipsam voluptates quasi hic quidem, veritatis aperiam debitis minima eligendi alias cumque sit totam?
    Velit, non deserunt.`,
  `Magnam ex commodi omnis inventore enim atque nisi, doloremque eos adipisci reprehenderit voluptates architecto delectus earum, ea officia nostrum doloribus mollitia facilis ut unde! Officia, labore voluptatibus.`,
  `Magni, suscipit. Accusamus, unde corporis accusantium, dolor nobis iure consequuntur recusandae architecto aut ipsa non. Ipsa in natus odit magnam distinctio eius commodi, vero pariatur, id accusantium eligendi, ipsum architecto!`,
];

const article = document.querySelector("article");
const generate = document.querySelector("#btn");
const len = document.querySelector("#len");

generate.addEventListener("click", generateText);

function generateText() {
  const length = parseInt(len.value);
  if (length > 20) {
    article.innerHTML = "Maximum paragraph limit is 20";
    return;
  }
  if (isNaN(length) || length < 0) {
    const index = Math.floor(Math.random() * paragraphs.length);
    article.textContent = paragraphs[index];
  } else {
    let p = "";
    for (i = 0; i < length; i++) {
      const index = Math.floor(Math.random() * paragraphs.length);

      p += paragraphs[index] + "<br><br>";
    }
    article.innerHTML = p;
  }
}
