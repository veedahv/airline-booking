let account = null;
const serverAPI = "/api/accounts";

const routes = {
  "/login": { templateId: "login" },
  "/dashboard": {
    templateId: "dashboard",
    init: updateDashboard
  }
};

// update route according to current view 
function updateRoute() {
  const path = window.location.pathname;
  console.log(path);
  const route = routes[path];
  console.log(route);

//   if (!route) {
//     return navigate("/login");
//   }

  const template = document.getElementById(route.templateId);
  const view = template.content.cloneNode(true);
  const app = document.getElementById("app");

  app.innerHTML = "";

  if (typeof route.init === 'function') {
    route.init(view);
  }

  app.appendChild(view);
}

// update account information on Dashboard view
function updateDashboard(view) {
  const viewModel = {
    ...account,
    formattedBalance: account.balance.toFixed(2)
  };

  bind(view, viewModel);

  const template = document.getElementById("transaction");
  const table = view.querySelector("tbody");

  for (let transaction of account.transactions) {
    const row = template.content.cloneNode(true);
    const viewModel = {
      ...transaction,
      formattedAmount: transaction.amount.toFixed(2)
    };

    bind(row, viewModel);
    table.append(row);
  }
}

// function to bind account information with HTML
function bind(target, model) {
  for (let [key, value] of Object.entries(model)) {
    const selector = `[data-bind=${key}]`;
    const elements = target.querySelectorAll(selector);
    elements.forEach(element => {
      element.textContent = value;
    });
  }
}

// function to navigate from one view to another
function navigate(path) {
    // console.log(window.location.origin);
    console.log(window.location);
  const location = path.startsWith("/") ? window.location.origin + path : path;
  console.log(location);
  window.history.pushState({}, path, location);
  updateRoute();
}

// function to navigate from one view to another on link click
function onLinkClick(event) {
  event.preventDefault();
  navigate(event.target.href);
}

// function to register a new account
async function register(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const jsonData = JSON.stringify(data);
  const response = await createAccount(jsonData);
  console.log(jsonData);
  console.log("Result", response);

  account = response;
  navigate("/dashboard");
}

// function to create a new account
async function createAccount(account) {
  const response = await fetch("/api/accounts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: account
  });

  return await response.json();
}

// function to login an existing account
async function login(event) {
  event.preventDefault();
  const user = event.target.user.value;
  const data = await getAccount(user);

  console.log(data);

  if (!data || data.error) {
    const message = data?.error || "An unknown error has occurred.";
    alert(message);
    return;
  }

  account = data;
  navigate("/dashboard");
}

// get user login account information
async function getAccount(user) {
  const response = await fetch("/api/accounts/" + encodeURIComponent(user));
  return await response.json();
}

window.onpopstate = () => updateRoute();
updateRoute();