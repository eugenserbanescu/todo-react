const URL = 'http://localhost:1337/graphql';
function makeQuery(query) {
  return fetch(URL, {
    method: 'POST',
    body: query,
    cache: 'no-cache',
    headers: {
      'content-type': 'application/graphql',
    },
  })
    .then(r => r.json())
    .catch(e => e);
}

export function getTodosQuery() {
  return makeQuery(`query {
      todos(userId:"739955945098.7233") {
        id
        title
        done
      }
    }`);
}

export function addTodoMutation(title) {
  if (!title) throw new Error(`Can't create a todo without a title`);
  return makeQuery(`mutation {
      createTodo(title:"${title}") {
        id
        title
        done
      }
    }`);
}

export function editTodoMutation(id, changes) {
  if (!id) throw new Error(`Can't edit a todo without an id`);
  const args = Object.keys(changes)
    .map(key => {
      return `${key}: ${
        typeof changes[key] === 'string' ? `"${changes[key]}"` : changes[key]
      }`;
    })
    .join(',');
  return makeQuery(`mutation {
    editTodo(id:"${id}", ${args}) {
      id
      title
      done
    }
  }`);
}
