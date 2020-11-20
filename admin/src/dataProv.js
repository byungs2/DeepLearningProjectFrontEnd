import { fetchUtils } from "react-admin";
import jsonServerProvider from 'ra-data-json-server';

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
    ...dataProvider,
    create: (resource, params) => {
        if (resource === 'member') {
            const formData = new FormData();
            const myFile = new File([params.data.memberFace.memberFace],"memberFace",{ type: params.data.memberFace.memberFace.type});
            formData.append('memberFace',myFile);
            formData.append('memberName', params.data.memberName);
            formData.append('memberCount',params.data.memberCount);

            return fetch('http://localhost:8082/member', {
                method: 'post',
                body: formData,
            })
                .then(response => response.json())
                .then(picture => dataProvider.create(resource, params.id, {
                    ...params.data,
                    picture,
                }));
        }
    
        return dataProvider.create(resource, params.id, { ...params.data });
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