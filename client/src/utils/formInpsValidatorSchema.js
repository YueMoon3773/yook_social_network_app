import { z } from 'zod';

const bannedNames = [
    'nicki',
    'ni cki',
    'n icki',
    'n i c ki',
    'n i c k i',
    'nic ki',
    'minaj',
    'm ina j',
    'm in a j',
    'm i n a j',
    'mi naj',
    'min aj',
    'nickiminaj',
    'nicki',
    'nickj',
    'njckj',
    'minaj',
    'mjnaj',
    'onika tanya maraj-petty',
    'onika tanya nicki maraj-petty',
    'onika tanya nicki maraj petty',
    'onika tanya nicki maraj',
    'onika tanya nicki minaj',
    'onika tanya maraj petty',
    'onika tanya petty',
    'onika tanya',
    'onikatanyapetty',
    'onika petty',
    'onikatanyamarajpetty',
    'onikatanyamaraj-petty',
    'onika maraj',
    'onikamaraj',
    'maraj',
    'onika tanya maraj',
    'maraj-petty',
    'maraj',
    'marajpetty',
    'barbs',
    'israel',
];
const bannedNamesRegex = new RegExp(`\\b(${bannedNames.join('|')})\\b`, 'i');

export const firstNameInpValidatorSchema = z
    .string()
    .trim()
    .min(1, 'First name must be at least 1 character')
    .max(30, 'First name must be at most 30 characters')
    .regex(/^[a-zA-Z]+$/, 'Only letters are allowed for first name');

export const lastNameInpValidatorSchema = z
    .string()
    .trim()
    .min(1, 'Last name must be at least 1 character')
    .max(30, 'Last name must be at most 30 characters')
    .regex(/^[a-zA-Z]+$/, 'Only letters are allowed for last name');

export const userNameInpValidatorSchema = z
    .string()
    .trim()
    .min(3, 'User name must be at least 3 characters')
    .max(16, 'User name must be at most 16 characters')
    .refine((val) => !bannedNamesRegex.test(val), 'This user name is banned. Please try a different one')
    .regex(/^[a-zA-Z0-9_]+$/, 'Only letters, numbers, underscores are allowed for user name');

export const passwordInpValidatorSchema = z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .max(32, 'Password must be at most 32 characters')
    .regex(/[A-Z]/, 'Password must include at least one uppercase letter')
    .regex(/[a-z]/, 'Password must include at least one lowercase letter')
    .regex(/[0-9]/, 'Password must include at least one number')
    .regex(/[,.?/!@#$%^&*()\-_=+]/, 'Password must include at least one symbol (,.?/!@#$%^&*()-_=+)');

export const retypePasswordMissingErrorMsg = 'Retype password field must be filled and match with password field';
export const retypePasswordErrorMsg = "Retype password field didn't match password field";

export const isAdminInpValidatorSchema = z.boolean();

export const adminSecretKeyMissingErrorMsg = "Admin secret key field must be filled if you're admin";
export const adminSecretKeyErrorMsg = 'Admin secret key is incorrect';

export const bioInpValidatorSchema = z.string().trim().max(600, 'Bio must be at most 600 characters').optional();

// export const birthdayDateValidatorSchema = z.string().refine((val) => !isNaN(Date.parse(val)), 'Invalid date format');

export const birthdayDateInpValidatorSchema = z.date({ message: 'Invalid date format' });

export const postTitleInpValidatorSchema = z
    .string()
    .trim()
    .min(1, 'Post title must be at least 1 character')
    .max(100, 'Post title must be at most 100 characters');

export const postContentInpValidatorSchema = z
    .string()
    .trim()
    .min(1, 'Post content must be at least 1 character')
    .max(1600, 'Post content must be at most 1600 characters');

export const commentContentInpValidatorSchema = z
    .string()
    .trim()
    .min(1, 'Comment content must be at least 1 character')
    .max(600, 'Comment content must be at most 600 characters');
