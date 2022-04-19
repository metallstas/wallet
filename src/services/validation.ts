const WRONG_TITLE = 'Заголовок должен быть не более 50 символов'
const NOT_ERROR = ''

class ValidationService {
  public validationTitle(title: string) {
    if(title.length > 50) {
      return WRONG_TITLE
    }
    return NOT_ERROR
  }
}

export const validationServices = new ValidationService()
