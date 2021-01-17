import type { SagaReturn } from '@types'
import { all } from 'redux-saga/effects'

function* rootSaga(): SagaReturn {
  try {
    yield all([
      // Add your sagas here
    ])
  } catch (error) {
    // Add your error handler here
  }
}

export default rootSaga
