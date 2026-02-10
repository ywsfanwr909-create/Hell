import { Button } from "@heroui/react"












export default function AppButton({children,isDisabled,isLoading,...props}) {

return (
    <>
        <Button  {...props} isDisabled={isDisabled}  isLoading={isLoading}>
        {children}
        </Button>
    </>
)
}


// children
// 👉 أي حاجة تكتبها بين فتح وقفل <AppButton>

// isDisabled
// 👉 جاي من اللي بينادي الكومبوننت

// isLoading
// 👉 برضه جاي من اللي بيناديه

// ...props
// 👉 أي props زيادة (زي type, color, size, إلخ)