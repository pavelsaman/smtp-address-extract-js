
const splitChar = ';';
const startChar = '<';
const endChar = '>';
const empty = '';

const getListOfSMTPAddresses = (smtp_str) => {
    return smtp_str.split(splitChar).filter(smtp => smtp !== empty);
}

const addresses = (smtp_str) => {     
    const email_addresses = [];

    getListOfSMTPAddresses(smtp_str).forEach((smtp) => {
        const start = smtp.indexOf(startChar);
        const end = smtp.lastIndexOf(endChar);

        email_addresses.push(smtp.substring(start + 1, end));
    });

    return email_addresses;
};

const aliases = (smtp_str) => {
    const smtp_aliases = [];

    getListOfSMTPAddresses(smtp_str).forEach((smtp) => {
        let end = smtp.indexOf(startChar);        
        if (end === -1) {
            end = smtp.length + 1;
        }

        smtp_aliases.push(smtp.substr(0, end - 1).trim());
    });

    return smtp_aliases;
}

const parse = (smtp_str) => {
    const smtp_objects = [];
    const email_addresses = addresses(smtp_str);
    const smtp_aliases = aliases(smtp_str);

    let i = 0;
    for (; i < email_addresses.length; i++) {
        smtp_objects.push({
            addr: email_addresses[i],
            alias: smtp_aliases[i]
        });
    }

    return smtp_objects;
}

export { addresses, aliases, parse };
