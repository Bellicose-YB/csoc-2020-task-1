/***
 * @todo Redirect the user to login page if token is not present.
 */
var token = localStorage.getItem('token');

if(token === null)
{

    window.location.href='/login';

}