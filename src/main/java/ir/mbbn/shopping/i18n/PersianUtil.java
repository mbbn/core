package ir.mbbn.shopping.i18n;

/**
 * Utility class for handling persian characters issues.
 *
 */
public class PersianUtil {

	private PersianUtil() {
	}

	/**
	 * Java can parse persian numbers in for example Long.valueOf() method, but Javascript can't. So we should call this method in client-side for replacing 
	 * persian numbers with english equivalents before converting string to number.
	 * 
	 * @param input which may contains persian numeric characters
	 * @return string which only has english numeric characters
	 * @see #replaceEnglishWithPersianNumbers(String)
	 */
	public static String replacePersianWithEnglishNumbers(String input) {
		if (input == null) {
			return null;
		}
		return input.replace('\u06f0', '0').replace('\u06f1', '1').replace('\u06f2', '2').replace('\u06f3', '3').replace('\u06f4', '4').replace('\u06f5', '5')
				.replace('\u06f6', '6').replace('\u06f7', '7').replace('\u06f8', '8').replace('\u06f9', '9');
	}

	/**
	 * This method replaces english numbers with persian equivalents.
	 * 
	 * @param input which may contains english numeric characters
	 * @return string which only has persian numeric characters
	 * @see #replacePersianWithEnglishNumbers(String)
	 */
	public static String replaceEnglishWithPersianNumbers(String input) {
		if (input == null) {
			return null;
		}
		return input.replace('0', '\u06f0').replace('1', '\u06f1').replace('2', '\u06f2').replace('3', '\u06f3').replace('4', '\u06f4').replace('5', '\u06f5')
				.replace('6', '\u06f6').replace('7', '\u06f7').replace('8', '\u06f8').replace('9', '\u06f9');
	}

	/**
	 * Replaces arabic 'Kaf' and 'Ya' to persian equivalents.
	 * 
	 */
	public static String convertArabicCharactersToPersianCharacters(String input) {
		if (input == null) {
			return null;
		}
		input = input.replace("\u064a", "\u06cc");
		input = input.replace("\u0643", "\u06a9");
		return input;
	}

	/**
	 * Replaces persian 'Kaf' and 'Ya' to arabic equivalents.
	 * 
	 */
	public static String convertPersianCharactersToArabicCharacters(String input) {
		if (input == null) {
			return null;
		}
		input = input.replace("\u06cc", "\u064a");
		input = input.replace("\u06a9", "\u0643");
		return input;
	}

}
