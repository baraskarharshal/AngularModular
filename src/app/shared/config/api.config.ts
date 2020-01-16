import { environment } from 'src/environments/environment'

const datatabelEndPoint = [
    {
        // simple GET
        name: 'GET_DATA_CONFIG',
        method: 'GET',
        url: '/api/data/config'
    },
    {
        // GET with params
        name: 'GET_MODULE_CONTENT',
        method: 'GET',
        url: '/api/modulecontent/[ID]?pageNo=[PAGE_NO]&pageSize=[PAGE_SIZE]'
      },
      {
        // simple POST
        name: 'SAVE_CONTENT_MODULE_FIELDS',
        method: 'PUT',
        url: '/api/moduleattributecontent'
      },
      {
          // POST with params
        name: 'UPLOAD_DOCUMENT',
        method: 'POST',
        url: '/api/modulecontent/[ID]/document/[DOCID]'
      },
]

export const ApiConfig ={
    baseUrl: environment.baseUrl,
    endpoints:[
        ...datatabelEndPoint
    ]
}