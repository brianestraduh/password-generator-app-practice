export default function generatePassword(
  length: number,
  includeUppercase: boolean,
  includeLowercase: boolean,
  includeNumbers: boolean,
  includeSymbols: boolean
): { password: string; strength: 0 | 1 | 2 | 3 } {
  // Define character sets
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+[]{}|;:,.<>?";

  // Validate length
  if (length > 25) {
    length = 25;
  }

  // Build the pool of characters
  let characterPool = "";
  let typesCount = 0;

  if (includeUppercase) {
    characterPool += uppercaseLetters;
    typesCount++;
  }
  if (includeLowercase) {
    characterPool += lowercaseLetters;
    typesCount++;
  }
  if (includeNumbers) {
    characterPool += numbers;
    typesCount++;
  }
  if (includeSymbols) {
    characterPool += symbols;
    typesCount++;
  }

  // Ensure the character pool is not empty
  if (characterPool === "") {
    throw new Error("At least one character type must be selected");
  }

  // Generate the password
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterPool.length);
    password += characterPool[randomIndex];
  }

  // Determine password strength
  let strength: 0 | 1 | 2 | 3 = 0;
  if (length >= 8) {
    if (typesCount === 1) {
      strength = 1;
    } else if (typesCount === 2) {
      strength = 2;
    } else if (typesCount >= 3) {
      strength = 3;
    }
  }

  return { password, strength };
}

// Strength 0: Password length is less than 8 characters.
// Strength 1: Password length is at least 8 characters and includes only one type of character (e.g., only lowercase letters).
// Strength 2: Password length is at least 8 characters and includes two types of characters (e.g., lowercase and uppercase letters).
// Strength 3: Password length is at least 8 characters and includes three or more types of characters (e.g., lowercase, uppercase, numbers, and symbols).
