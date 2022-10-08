'use strict';

function Homepage() {
  return (
    <div>This component needs to be implemented.
      <p>Welcome to the Balloonicorn's Trading Card site</p>
      <a href="/cards"></a>
      <img src="/static/img/balloonicorn.jpg" />
    </div>
  );
  
           
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
