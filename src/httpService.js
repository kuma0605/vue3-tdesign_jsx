import axios from 'axios'

const getAxiosInstance=(counter)=>{
  const instance = axios.create({
    baseURL: '/'
  })
  
  // Add a request interceptor
  instance.interceptors.request.use(
    (config) => {
      // Do something before request is sent
      counter.http_increment();
      return config
    },
    (error) => {
      // Do something with request error
      counter.http_decrement();
      return Promise.reject(error)
    }
  )
  
  // Add a response interceptor
  instance.interceptors.response.use(
    (response) => {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      counter.http_decrement();
      return response
    },
    (error) => {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      counter.http_decrement();
      return Promise.reject(error)
    }
  )

  return instance;
}

export {
  getAxiosInstance
}

