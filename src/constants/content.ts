import type { Post, Project, ContactItem, PostDetail } from '../types'

export const POSTS: Post[] = [
  {
    date: 'Jul 2026',
    title: 'Unpacking a UPX-modified Loader with Anti-Debug Tricks',
    summary:
      'Walking through a custom packer that detects debuggers via NtQueryInformationProcess and timing checks.',
    href: '/blog/upx-loader-antidebug',
    type: 'read',
  },
  {
    date: 'May 2023',
    title: 'Azov Wiper: Malware Analysis Report',
    summary:
      'Full analysis of the Azov destructive wiper, from shellcode decryption to persistence and wiping mechanisms.',
    href: '/blog/azov-wiper',
    type: 'read',
  },
]

export const FEATURED_POSTS = POSTS.slice(0, 4)

export const POST_DETAILS: Record<string, PostDetail> = {
  'azov-wiper': {
    slug: 'azov-wiper',
    title: 'Azov Wiper: Malware Analysis Report',
    date: 'May 23, 2023',
    readTime: '12 min read',
    image: '/eye.jpg',
    tags: ['Malware Analysis', 'Wiper', 'Reverse Engineering', 'YARA'],
    sections: [
      {
        id: 'executive-summary',
        title: 'Executive summary',
        content: [
          'Azov is a destructive malware that intentionally destroys victim\'s data and infects other programs. It is deployed through cracks and pirated software, deceiving victims into downloading the malicious program. It incorporates a trigger time for data corruption and infects 64-bit executables on Windows devices.',
        ],
      },
      {
        id: 'introduction',
        title: 'Introduction',
        content: [
          'Azov is a destructive ransomware that poses a significant threat to computer systems worldwide. The ransomware is named after the Ukrainian "Azov" military regiment, but this malware is likely not affiliated with the country and is just using the name as a false flag.',
          'Unlike traditional ransomware that encrypts files for ransom, it acts as a data wiper, deliberately destroying victim\'s data and infecting other programs. This malware has been distributed through cracks and pirated software.',
        ],
        images: [{ src: '/azov/image7.png', caption: 'Figure 1: VirusTotal analysis score 56/71' }],
      },
      {
        id: 'sample',
        title: 'Sample of the malware',
        content: [
          'The analyzed file is a 64-bit portable executable assembled with FASM (Flat Assembler). VirusTotal analysis score: 56/71.',
        ],
        images: [{ src: '/azov/image8.png', caption: 'Figure 2: Detect It Easy analysis of the sample' }],
      },
      {
        id: 'execution',
        title: 'Execution of the sample',
        content: [
          'After the execution of the Azov malware, a ransom note is created. The note contains a message expressing their intention to instill fear, create chaos, and derive pleasure from the suffering of others.',
          'Once a system is infected with Azov, victims will be unable to recover their files. The malware replaces all file extensions with .azov, and wipes all the data, rendering the files inaccessible.',
        ],
        images: [
          { src: '/azov/image9.png', caption: 'Figure 3: Ransom note (RESTORE_FILES.txt)' },
          { src: '/azov/image10.png', caption: 'Figure 4: Files replaced with .azov extension' },
        ],
      },
      {
        id: 'functionality',
        title: 'Functionality overview',
        content: [
          'Azov is a sophisticated malware manually crafted in assembly language using FASM, making it difficult to detect and analyze. The malware uses various anti-analysis and code obfuscation techniques.',
          'One characteristic of Azov is its utilization of a continuous overwriting technique. By repetitively overwriting 666 bytes of the original data content, Azov constantly changes its appearance, making it challenging to detect using static patterns or signatures.',
          'Azov does not show network activity or data exfiltration, suggesting that its primary objective is not to steal information, but to destroy systems. It trojanizes programs to spread and infect other systems.',
        ],
      },
      {
        id: 'shellcode-decryption',
        title: 'Decrypting shellcode',
        content: [
          'The code of Azov is intentionally crafted in assembly language to be obfuscated and difficult to understand. To analyze and comprehend the code, it is necessary to perform reverse engineering, cleanup the code, and apply various techniques to unravel the obfuscation.',
          'Once unpacked, the code utilizes an encryption technique to protect its shellcode. The encryption process involves XOR operations with a dynamically changing key. Encryption serves as a defensive measure, evading static signature-based detection mechanisms.',
        ],
        images: [{ src: '/azov/image11.png', caption: 'Figure 5: Shellcode decryption routine' }],
      },
      {
        id: 'persistence',
        title: 'Persistence mechanism',
        content: [
          'The malware incorporates a persistence creation mechanism to ensure its continued presence on the compromised system. This is achieved through retrieving the paths of specific executable files, copying their content to another file, and backdooring the resulting file "Rdpclient.exe" with shellcode.',
          'The malware then creates a registry key to ensure its execution during system startup: HKEY_LOCAL_MACHINE\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run.',
        ],
        images: [{ src: '/azov/image12.png', caption: 'Figure 6: Persistence creation via registry key' }],
      },
      {
        id: 'wiping',
        title: 'Wiping mechanism',
        content: [
          'It opens a file, retrieves its size, and proceeds to write data in chunks of 666 bytes. The written data is sourced from an uninitialized or random buffer. The code ensures that the total bytes written do not exceed the file size and then closes the file handle. It also renames the file extension with .azov.',
          'By writing random data from an uninitialized buffer, the malware incorporates a polymorphic behavior, making each instance of the modified file slightly different from others.',
          'The malware utilizes system time to determine when to initiate the wiping routine. During the wiping process, the malware selectively avoids certain file extensions and system paths.',
        ],
        images: [
          { src: '/azov/image13.png', caption: 'Figure 7: Wiping routine writing 666 bytes chunks' },
          { src: '/azov/image14.png', caption: 'Figure 8: Omitted file extensions' },
          { src: '/azov/image15.png', caption: 'Figure 9: Omitted system paths' },
        ],
      },
      {
        id: 'backdooring',
        title: 'Backdooring executables',
        content: [
          'The malware identifies specific conditions for backdooring 64-bit ".exe" files. Once a suitable file is found, its code section is modified, the main shellcode is injected, and the file is re-encrypted. The encryption/decryption algorithm remains consistent, aiding in Azov detection.',
        ],
        images: [
          { src: '/azov/image16.png', caption: 'Figure 10: Backdooring function call graph' },
          { src: '/azov/image17.png', caption: 'Figure 11: Shellcode injection and re-encryption' },
        ],
      },
      {
        id: 'iocs',
        title: 'IOCs',
        content: [],
        code: 'SHA256\nb102ed1018de0b7faea37ca86f27ba3025c0c70f28417ac3e9ef09d32617f801 (old version)\n650f0d694c0928d88aeeed649cf629fc8a7bec604563bca716b1688227e0cc7e (new version)\n\nRegistry key created:\nHKLM\\SOFTWARE\\Microsoft\\Windows\\CurrentVersion\\Run\\Bandera = "C:\\ProgramData\\rdpclient.exe"\n\nFile created:\nC:\\Users\\Admin\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\\RESTORE_FILES.txt',
      },
      {
        id: 'recommendations',
        title: 'Recommendations',
        content: [
          'Remove any suspicious code or files and isolate affected systems from the network. Disconnect from the internet and unplug all storage devices. It is recommended to reinstall Windows.',
          'Perform a backup of important data on a separate system or storage device. Implement YARA rules specifically designed to detect this ransomware. Download software only from trustworthy sources.',
        ],
      },
    ],
  },
  'upx-loader-antidebug': {
    slug: 'upx-loader-antidebug',
    title: 'Unpacking a UPX-modified Loader with Anti-Debug Tricks',
    date: 'July 15, 2026',
    readTime: '8 min read',
    tags: ['Reverse Engineering', 'Malware Analysis', 'Anti-Debug'],
    sections: [
      {
        id: 'introduction',
        title: 'Introduction',
        content: [
          'I came across this sample during a routine triage. On the surface it looked like a standard UPX-packed binary, but upx -d failed immediately. Somebody had modified the section headers and tampered with the magic bytes to break automated unpacking.',
          'This post walks through how I identified the anti-debug techniques, bypassed them, and manually reconstructed the original PE to get to the real payload.',
        ],
      },
      {
        id: 'initial-triage',
        title: '1. Initial triage',
        content: [
          'First pass with file and DIE (Detect It Easy) confirmed a PE32 binary with UPX signatures, but the section names had been renamed from UPX0/UPX1 to .text/.rdata. Running upx -d returned "not packed by UPX" \u2014 the p_info structure had been zeroed out.',
          'Loading the binary into PE-bear showed the entry point sitting in the second section, which is typical for UPX. The section characteristics were also a giveaway: the first section had no raw data but a large virtual size, classic for the decompression stub.',
        ],
      },
      {
        id: 'anti-debug',
        title: '2. Anti-debug techniques',
        content: [
          'Before the unpacking stub runs, the loader checks for debuggers using three methods: NtQueryInformationProcess with ProcessDebugPort, a timing check using rdtsc around a loop, and PEB.BeingDebugged via the TEB.',
          'The timing check was the most annoying \u2014 it measures the cycle count across a tight loop and if the delta exceeds a threshold (indicating single-stepping), it jumps to a decoy payload that looks like the real thing but does nothing useful.',
          'I patched the conditional jumps in x64dbg to always take the clean path. You could also use ScyllaHide to handle all three checks automatically.',
        ],
      },
      {
        id: 'manual-unpacking',
        title: '3. Manual unpacking',
        content: [
          'With the anti-debug bypassed, I set a breakpoint on VirtualProtect \u2014 UPX calls it to mark the decompressed section as executable. After the second call to VirtualProtect, the original code was fully decompressed in memory.',
          'I dumped the process using pe-sieve, then fixed the imports with Scylla. The IAT was partially destroyed by the packer, but cross-referencing with a clean UPX-packed binary helped reconstruct the missing entries.',
        ],
      },
      {
        id: 'payload',
        title: '4. The real payload',
        content: [
          'After unpacking, the binary turned out to be a simple downloader. It reaches out to a hardcoded C2 over HTTPS, pulls a second-stage DLL, and loads it reflectively. The C2 domain was already sinkholed by the time I got to it.',
          'The interesting part was not the payload itself but the effort put into the packing. Modifying UPX just enough to break automated tools while keeping the decompression logic intact is a common trick in commodity malware loaders.',
        ],
      },
      {
        id: 'takeaways',
        title: '5. Takeaways',
        content: [
          'Modified UPX is everywhere. If upx -d fails, don\'t give up \u2014 load it in a debugger, find the decompression loop, and dump after it finishes. The structure is almost always the same.',
          'Anti-debug checks in the unpacking stub are a speed bump, not a wall. Tools like ScyllaHide and TitanHide handle most of them. The real challenge is usually fixing the IAT after dumping.',
        ],
      },
    ],
  },
}

export const PROJECTS: Project[] = [
  {
    name: 'iOS Virtual Home Button',
    description: 'RE of iOS assistivetouchd. Home button simulation via IOKit HID reports.',
    tech: 'iOS',
  },
  {
    name: 'HomeGuard',
    description: 'Network monitoring tool that maps devices and sends alerts on activity.',
    tech: 'PYTHON',
  },
  {
    name: 'MidnightEngine',
    description: 'Cross-platform 3D rendering engine.',
    tech: 'C++',
  },
]


export const CONTACT_ITEMS: ContactItem[] = [
  { label: 'X | Twitter', value: '@Elios45', href: 'https://x.com/Elios45', external: true },
  { label: 'github', value: 'Elios45', href: 'https://github.com/Elios45', external: true },
]
