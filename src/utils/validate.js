 /* eslint-disable */
export const required = value => (value ? undefined : 'Campo obrigatório');
export const email = value => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase()) ? undefined : 'Email inválido';
  };
export const number = value => (isNaN(value) ? 'Deve ser um número' : undefined)