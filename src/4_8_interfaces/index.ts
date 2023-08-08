interface Payment {
  sum: number;
  from: number;
  to: number;
}

interface PaymentRequest extends Payment {}

enum PaymentStatus {
  SUCCESS = 'success',
  FAILED = 'failed',
}

interface SuccessResponseData extends Payment {
  databaseId: number;
}

interface FailedResponseData {
  errorMessage: string;
  errorCode: number;
}

interface ResponseSuccess {
  status: PaymentStatus.SUCCESS;
  data: SuccessResponseData;
}

interface ResponseFailed {
  status: PaymentStatus.FAILED;
  data: FailedResponseData;
}

//Type Guard
function isSuccess(
  res: ResponseSuccess | ResponseFailed
): res is ResponseSuccess {
  if (res.status === PaymentStatus.SUCCESS) {
    return true;
  }
  return false;
}

function getId(res: ResponseSuccess | ResponseFailed): number {
  if (isSuccess(res)) {
    return res.data.databaseId;
  } else {
    throw new Error(res.data.errorMessage);
  }
}
