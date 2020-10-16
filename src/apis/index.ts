import service from '../utils/service'

export function getDemo () {
  return service({
    method: 'get',
    url: '/demo'
  })
}
