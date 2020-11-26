
export default {
    // called when the user attempts to log in
    login: ({ username, password }) => {
        if('byungs2' === username && '1' === password ){
            localStorage.setItem('username', username);
            // accept all username/password combinations
            return Promise.resolve();
        }else{
            return Promise.reject();
        }
        
        // 알수없는 에러로 잠시 백단과 연결 보류중
        // const servicesHost = 'http://localhost:8082';
        // fetch(servicesHost + '/login/' + username,{
        //     method : 'get'
        // }).then(function(res){
        //     if(res.adminId === username && res.adminPw === password ){
        //         localStorage.setItem('username', username);
        //         // accept all username/password combinations
        //         return Promise.resolve();
        //     }else{
        //         return Promise.reject();
        //     }
        // })
    }, 
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};