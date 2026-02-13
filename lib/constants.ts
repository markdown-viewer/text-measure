export let DEFAULT_FONT_FAMILY = 'Arial, Helvetica, sans-serif';
export const DEFAULT_FONT_SIZE = 12;

export function setDefaultFontFamily(fontFamily: string): void {
	if (!fontFamily || !fontFamily.trim()) {
		return;
	}
	DEFAULT_FONT_FAMILY = fontFamily;
}
