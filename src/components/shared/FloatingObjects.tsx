import styles from './FloatingObjects.module.css'

interface Props {
  variant?: 'hero' | 'about' | 'minimal'
}

export default function FloatingObjects({ variant = 'hero' }: Props) {
  return (
    <div className={`${styles.container} ${styles[variant]}`} aria-hidden="true">
      {/* Metallic sphere */}
      <div className={`${styles.obj} ${styles.sphere1} animate-float1`} />

      {/* Glass ring */}
      <div className={`${styles.obj} ${styles.ring1} animate-float2`} />

      {/* Pearl disc */}
      <div className={`${styles.obj} ${styles.disc1} animate-float3`} />

      {/* Small orbs */}
      <div className={`${styles.obj} ${styles.orb1} animate-float1`} />
      <div className={`${styles.obj} ${styles.orb2} animate-float2`} />
      <div className={`${styles.obj} ${styles.orb3} animate-float3`} />

      {/* Decorative lines */}
      <div className={styles.line1} />
      <div className={styles.line2} />
    </div>
  )
}
