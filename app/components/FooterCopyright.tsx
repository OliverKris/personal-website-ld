export default function FooterCopyright() {
    const year = new Date().getFullYear()

    return (
        <p className="text-xs text-center text-muted-foreground">
            © {year} Lavani Dindial. All rights reserved.
        </p>
    )
}