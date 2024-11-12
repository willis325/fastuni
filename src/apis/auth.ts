import { Request } from '@/utils';

export const login = (code: string) => Request.post('/api/auth/login', { code });
