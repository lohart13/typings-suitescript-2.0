export interface NSFile {
    description: string;
    encoding: string;
    fileType: string;
    folder: number;
    id: number;
    isInactive: boolean;
    isOnline: boolean;
    isText: boolean;
    name: string;
    path: string;
    size: string;
    url: string;
    save: () => number;
    getContents: () => string;
}

export interface FileType {
    AUTOCAD: string;
    BMPIMAGE: string;
    CSV: string;
    EXCEL: string;
    FLASH: string;
    FREEMARKER: string;
    GIFIMAGE: string;
    GZIP: string;
    HTMLDOC: string;
    ICON: string;
    JAVASCRIPT: string;
    JPGIMAGE: string;
    JSON: string;
    MESSAGERFC: string;
    MP3: string;
    MPEGMOVIE: string;
    MSPROJECT: string;
    PDF: string;
    PJPGIMAGE: string;
    PLAINTEXT: string;
    PNGIMAGE: string;
    POSTSCRIPT: string;
    POWERPOINT: string;
    QUICKTIME: string;
    RTF: string;
    SMS: string;
    STYLESHEET: string;
    TAR: string;
    TIFFIMAGE: string;
    VISIO: string;
    WEBAPPPAGE: string;
    WEBAPPSCRIPT: string;
    WORD: string;
    XMLDOC: string;
    XSD: string;
    ZIP: string;
}

export interface FileEncoding {
    UTF8: string;
    WINDOWS_1252: string;
    ISO_8859_1: string;
    GB18030: string;
    SHIFT_JIS: string;
    MAC_ROMAN: string;
    GB2312: string;
    BIG5: string;
}

export interface FileLoadOptions {
    /** 
     * Internal ID of the file as a number or a string, or the relative file path to the file in the file cabinet.
     */
    id: (number | string);
}

export interface FileDeleteOptions {
    /**
     * Internal ID of the file.
     */
    id: (number | string);
}

export interface FileCreateOptions {
    /**
     * The file name.
     */
    name: string;
    /**
     * The file type.
     */
    fileType: string;
    /**
     * The file content.
     */
    contents: string;
    /**
     * The internal ID of the folder used when the file is saved.
     */
    folder?: number
}

export interface FileModule {
    /**
     * Method used to create a new file in the NetSuite file cabinet.
     */
    create(options: FileCreateOptions): NSFile;
    /**
     * Method used to delete an existing file from the NetSuite file cabinet.
     */
    delete(options: FileDeleteOptions): void;
    /**
     * Method used to load an existing file from the NetSuite file cabinet.
     */
    load(options: FileLoadOptions): NSFile;
    /**
     * Method used to load an existing file from the NetSuite file cabinet.
     */
    load(idOrPath: number | string): NSFile;
    /**
     * Enumeration that holds the string values for supported character encoding.
     */
    Encoding: FileEncoding;
    /**
 * Enumeration that holds the string values for supported file types.
     */
    Type: FileType;
}

export default FileModule;