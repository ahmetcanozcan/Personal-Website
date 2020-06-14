

const bodyInput = document.querySelector("#contact-form textarea");
const nameInput = document.querySelector("#contact-form input");

const sendButton = document.querySelector("#contact-form button.send");

console.log("B", bodyInput, nameInput, sendButton);

function getMailRequestBody() {
  return JSON.stringify({

    name: nameInput.value,
    body: bodyInput.value,
  });
}

function clean() {
  bodyInput.value = "";
  nameInput.value = "";
}

const sendingHTML = `<img style="width:1rem; transform: scale(1.4)" src="/assets/loading.svg"  />`
const defaultHTML = sendButton.innerHTML;

function setSending(value) {
  if (value) {
    sendButton.disabled = true;
    sendButton.innerHTML = sendingHTML;
  } else {
    sendButton.disabled = false;
    sendButton.innerHTML = defaultHTML;
  }


}


const URL = "https://us-central1-ahmetcanozcan-github-io.cloudfunctions.net/sendMail"

/**
 * @param {Function<success: Boolean >} cb
 */
function create(cb) {
  sendButton.onclick = function () {
    setSending(true);
    clean();

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: getMailRequestBody()
    })
      .then(res => res.json())
      .then(json => {
        cb(json.success)
        alert("I got your message!");
        setSending(false);
      }).catch(err => {
        console.error(err);
        alert("Ops! Something went wrong.")
        setSending(false);
      })

  }
}


export default create;