import { atom } from 'jotai'
import { CognitoUser } from '@aws-amplify/auth'

export const UserAtom = atom<CognitoUser | undefined>(undefined)