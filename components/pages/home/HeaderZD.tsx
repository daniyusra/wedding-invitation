import { StackProps, Box, Image } from "@chakra-ui/react";
import 'components/index.css';

const HeaderZD = ({ ...stackProps }: StackProps) => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

  return (
    <Box 
        bg="#183641" w="100%" paddingTop="10px" paddingBottom="10px"
        cursor="pointer"
        position="fixed" 
        top="0" 
        zIndex="1000"
        onClick={scrollToTop} 
        {...stackProps}
    >
        <div
            style={{
            display: 'flex', // Menggunakan flexbox
            alignItems: 'center', // Semua elemen sejajar secara vertikal di tengah
            justifyContent: 'center',
            }}
        >
            <span
            style={{
                display: 'inline-block',
                width: '35%', // Ukuran garis kiri
                borderBottom: '2px solid #bbbe32', // Garis bawah
                marginBottom: '2px',
            }}
            />
            <span
            style={{
                display: 'inline-block',
                margin: '0 20px', // Memberi jarak horizontal pada logo
            }}
            >
            <Image
                src="/logo_zd.png"
                style={{
                width: '50px', // Ukuran logo
                height: 'auto', 
                }}
                alt="Logo"
            />
            </span>
            <span
            style={{
                display: 'inline-block',
                width: '35%', 
                borderBottom: '2px solid #bbbe32', 
                marginBottom: '2px',
            }}
            />
        </div>
    </Box>
  );
};

export { HeaderZD };
