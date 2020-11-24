import { fetchUtils } from "react-admin";
//import jsonServerProvider from 'ra-data-json-server';
import jsonServerProvider from "./basicStructureOfProvider";
const servicesHost = 'http://localhost:8082';

const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    options.headers.set('Access-Control-Expose-Headers','X-Total-Count');
    return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider(servicesHost, httpClient);

const dataProv = {
    ...dataProvider, //확산연산자
    create: (resource, params) => {
        if (resource === 'member') {
            const formData = new FormData();
            const myFile = new File([params.data.memberFace.rawFile],params.data.memberFace.rawFile.name,{ type: params.data.memberFace.rawFile.type});
            formData.append('memberFace',myFile);
            formData.append('memberName', params.data.memberName);
            formData.append('memberCount',params.data.memberCount);
            
            return fetch(servicesHost+'/'+resource, {
                method: 'post',
                body: formData,
            })
                .then(response => response.json(),console.log(" ------ new data prov ------- "))
                .then(member => dataProvider.create(resource, member));
        }
        return dataProvider.create(resource, params);
    },
};

// const convertFileToBase64 = file =>
//     new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.onload = () => resolve(reader.result);
//         reader.onerror = reject;

//         reader.readAsDataURL(file.rawFile);
//     });
export default dataProv;