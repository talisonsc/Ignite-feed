import styles from "./sidebar.module.css"
export function Sidebar() {
  return (
    <asside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=40&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://lh3.googleusercontent.com/pw/AP1GczNZGNecFvvvhL07pKsZxutgVpGVlARnCLAYXhF3GofrovRCp3Z7lBssjXBb2GMcB91y11dQPUD1NOaojb-8IgzwIb2vmPKAHyUKrTzko1xKlNu_Q0z3CKC03-iIBRUsXDCjLps6-f6YOLcDAIjhyxUrVQP6OqwQbejH2GSeBjrr8Wz2N9vgE_Cflid_Hg-8qYCNqvHP3MmIKWpBaflSlEKNiE-S12biWCGeBmTu1KrkjPkI9sn0FEfxIdU8U7b7sTYUEyzxgyuOQbPHqfcppbl_dHXQ04xolT1UFlMVZFFISfd30lkfazLtOnMDkAvJYlFLijfvYeqC05LrJNuRrgp3-gWWTRGb22Miot9cp8J5SIa9BXvFqMhQcEY2MKtF7yzGc_MBs95Xpc7n2OZYlqNjdSWtPrgAwW574xf4w7h19-w8gZdLtP6PChVqpLecY9ODa8L0EDvM8kDJZmJpUNnHuyWO4P1rYouXeSIAnb0YZPpkbeohnwzPJa6Yy1ULVwOz4YvJLGoDQMWNQWFoFgH8M5ioMgO07mMsOVT6pCH8Tv842w98ym-PBn6D3jzDSDoGAszGs2nr5AuQVCcJy1AEomkBlMYzcPZvhKmywjo7_AbIGkL33pZovsZQ54gRO7lPfNICQjBWPGXFLIU2lFXFLvNvXxR5xdvZdIxzltT4BsKatec_EFvTfY6NhVFiZNkOrusNgkutADytE1ojM5yYnxVCUj2z00wcHKa7r5UI8cPxziQtSezzVQCistwWpDjKTl4tM80xG6qV_JnMyLmIKl3fuurwEMxb57ZPORcnP0zHlVq1I29uQQGqQ8KEjbZg_NwljBFV4i8NN-SPx0I6T06chyoydN02_H7rfue_rojywex39fGc-VC2pMoJicGKNBDpS7tAhbXZKSJyKZTIXw=w500-h500-s-no-gm?authuser=0" />
        <strong>Talison Silva</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">Editar seu Perfil</a>
      </footer>
    </asside>
  )
}
