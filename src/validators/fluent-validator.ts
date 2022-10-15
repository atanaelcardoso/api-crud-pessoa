let errors = [] as object[];

export function validationContract() {
  errors = [];
}

validationContract.prototype.isReqired = (value: string, message: string) => {
  if (!value || value.length <= 0)
    errors.push({ message: message });
}

validationContract.prototype.hasMinLen = (value: string, min: number, message:string) => {
  if (!value || value.length < min)
    errors.push({ message: message });
}

validationContract.prototype.hasMaxLen = (value: string, max: number, message: string) => {
  if (!value || value.length > max)
    errors.push({ message: message });
}

validationContract.prototype.isFixedxLen = (value: string, len: number, message: string) => {
  if (!value || value.length != len)
    errors.push({ message: message });
}

validationContract.prototype.isEmail = (value: string, message: string) => {
  var reg = new RegExp(/w><=/);
  if (!reg.test(value))
    errors.push({ message: message });
}

validationContract.prototype.errors = () => {
  return errors;
}

validationContract.prototype.clear = () => {
  errors = [];
}

validationContract.prototype.isValid = () => {
  return errors.length == 0;
}
