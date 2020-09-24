/***
 * @todo Redirect the user to main page if token is present.
 */
 var token = localStorage.getItem('token');

if(token !== null)

{

    window.location.href='/';

}