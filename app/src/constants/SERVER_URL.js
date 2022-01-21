function getServerURL() {
  if (window.location.href.includes('netlify.app')) {
    return 'https://react-django-res-api.herokuapp.com/';
  }

  return 'http://127.0.0.1:8000/';
}

export const SERVER_URL = getServerURL();
